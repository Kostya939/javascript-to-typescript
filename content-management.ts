// --- 1. Базові інтерфейси та типи контенту ---
interface BaseContent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    status: 'draft' | 'published' | 'archived';
  }
  
  interface Article extends BaseContent {
    title: string;
    content: string;
    tags: string[];
  }
  
  interface Product extends BaseContent {
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
  }
  
  type ContentOperations<T extends BaseContent> = {
    create: (item: T) => T;
    update: (id: string, updates: Partial<T>) => T;
    delete: (id: string) => boolean;
    fetch: (id: string) => T | null;
    list: () => T[];
  }
  
  // --- 2. Система управління правами доступу ---
  type Role = 'admin' | 'editor' | 'viewer';
  
  type Permission = {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  }
  
  type AccessControl<T extends BaseContent> = {
    [role in Role]: {
      [action in keyof Permission]: (content: T, userId: string) => boolean;
    }
  }
  
  const articleAccessControl: AccessControl<Article> = {
    admin: {
      create: () => true,
      read: () => true,
      update: () => true,
      delete: () => true,
    },
    editor: {
      create: () => true,
      read: () => true,
      update: () => true,
      delete: () => false,
    },
    viewer: {
      create: () => false,
      read: () => true,
      update: () => false,
      delete: () => false,
    },
  }
  
  // --- 3. Система валідації ---
  type Validator<T> = {
    validate: (data: T) => ValidationResult;
  }
  
  type ValidationResult = {
    isValid: boolean;
    errors?: string[];
  }
  
  const articleValidator: Validator<Article> = {
    validate: (data) => {
      const errors: string[] = [];
      if (!data.title || data.title.trim().length === 0) {
        errors.push("Title is required.");
      }
      if (!data.content || data.content.trim().length === 0) {
        errors.push("Content is required.");
      }
      return { isValid: errors.length === 0, errors };
    },
  }
  
  const validateContent = <T>(data: T, validator: Validator<T>): ValidationResult => {
    return validator.validate(data);
  }
  
  // --- 4. Система версіонування контенту ---
  type Versioned<T extends BaseContent> = T & {
    version: number;
    history: T[];
  }
  
  const createVersionedContent = <T extends BaseContent>(content: T): Versioned<T> => {
    return {
      ...content,
      version: 1,
      history: [],
    };
  }
  
  const updateVersionedContent = <T extends BaseContent>(
    versionedContent: Versioned<T>, 
    updates: Partial<T>
  ): Versioned<T> => {
    return {
      ...versionedContent,
      ...updates,
      version: versionedContent.version + 1,
      history: [...versionedContent.history, { ...versionedContent }],
    };
  }
  
  // --- Приклад використання ---
  const article: Article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'TypeScript Basics',
    content: 'Learn TypeScript step by step.',
    tags: ['typescript', 'programming'],
  };
  
  const versionedArticle = createVersionedContent(article);
  console.log('Initial version:', versionedArticle);
  
  const updatedArticle = updateVersionedContent(versionedArticle, { status: 'published' });
  console.log('Updated version:', updatedArticle);
  
  const validationResult = validateContent(article, articleValidator);
  console.log('Validation result:', validationResult);
  