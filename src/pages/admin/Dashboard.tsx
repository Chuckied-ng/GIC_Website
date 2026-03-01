import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { Navigate, Link } from 'react-router-dom';
import { useNews } from '@/hooks/useNews';
import { useProjects } from '@/hooks/useProjects';
import { useAllSiteImages } from '@/hooks/useSiteImage';
import {
  deleteArticle,
  addArticle,
  updateArticle,
  type NewsArticle,
  type NewsContentBlock,
} from '@/lib/newsStore';
import {
  deleteProject,
  addProject,
  updateProject,
  type Project,
} from '@/lib/projectsStore';
import {
  setImage,
  resetImage,
  resetAllImages,
  isImageCustomized,
  pageImageConfigs,
} from '@/lib/imageStore';
import {
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Eye,
  Newspaper,
  Save,
  ArrowLeft,
  FolderKanban,
  MapPin,
  DollarSign,
  Calendar,
  Image as ImageIcon,
  RotateCcw,
  Link2,
  Check,
  Upload,
} from 'lucide-react';

type EditorMode = 'list' | 'create' | 'edit';
type ActiveTab = 'news' | 'projects' | 'images';

const emptyArticle: Omit<NewsArticle, 'id'> = {
  date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  title: '',
  image: '',
  excerpt: '',
  category: '',
  readTime: '5 min read',
  author: '',
  content: [{ type: 'paragraph', text: '' }],
};

const emptyProject: Omit<Project, 'id'> = {
  title: '',
  category: '',
  location: '',
  year: new Date().getFullYear().toString(),
  value: '',
  scope: '',
  image: '',
  status: 'Ongoing',
};

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const articles = useNews();
  const projects = useProjects();
  const siteImages = useAllSiteImages();
  const [activeTab, setActiveTab] = useState<ActiveTab>('news');
  const [mode, setMode] = useState<EditorMode>('list');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Omit<NewsArticle, 'id'>>(emptyArticle);
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>(emptyProject);
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [previewContent, setPreviewContent] = useState<number | null>(null);
  const [saveMessage, setSaveMessage] = useState('');
  const [activeImagePage, setActiveImagePage] = useState(0);
  const [imageUrlInputs, setImageUrlInputs] = useState<Record<string, string>>({});
  const [editingImageKey, setEditingImageKey] = useState<string | null>(null);
  const [imageEditTab, setImageEditTab] = useState<Record<string, 'url' | 'upload'>>({});
  const [uploadPreviews, setUploadPreviews] = useState<Record<string, string>>({});

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  // --- NEWS HANDLERS ---
  const handleCreate = () => {
    setForm({ ...emptyArticle, content: [{ type: 'paragraph', text: '' }] });
    setEditingId(null);
    setMode('create');
  };

  const handleEdit = (article: NewsArticle) => {
    const { id, ...rest } = article;
    setForm(rest);
    setEditingId(id);
    setMode('edit');
  };

  const handleDelete = (id: number) => {
    deleteArticle(id);
    setDeleteConfirm(null);
  };

  const handleSave = () => {
    if (!form.title || !form.excerpt || !form.category || !form.author) {
      setSaveMessage('Please fill in all required fields.');
      setTimeout(() => setSaveMessage(''), 3000);
      return;
    }

    if (mode === 'create') {
      addArticle(form);
      setSaveMessage('Article created successfully!');
    } else if (mode === 'edit' && editingId !== null) {
      updateArticle(editingId, form);
      setSaveMessage('Article updated successfully!');
    }

    setTimeout(() => {
      setSaveMessage('');
      setMode('list');
    }, 1500);
  };

  // --- PROJECT HANDLERS ---
  const handleCreateProject = () => {
    setProjectForm({ ...emptyProject });
    setEditingId(null);
    setMode('create');
  };

  const handleEditProject = (project: Project) => {
    const { id, ...rest } = project;
    setProjectForm(rest);
    setEditingId(id);
    setMode('edit');
  };

  const handleDeleteProject = (id: number) => {
    deleteProject(id);
    setDeleteConfirm(null);
  };

  const handleSaveProject = () => {
    if (!projectForm.title || !projectForm.category || !projectForm.location || !projectForm.scope) {
      setSaveMessage('Please fill in all required fields.');
      setTimeout(() => setSaveMessage(''), 3000);
      return;
    }

    if (mode === 'create') {
      addProject(projectForm);
      setSaveMessage('Project created successfully!');
    } else if (mode === 'edit' && editingId !== null) {
      updateProject(editingId, projectForm);
      setSaveMessage('Project updated successfully!');
    }

    setTimeout(() => {
      setSaveMessage('');
      setMode('list');
    }, 1500);
  };

  const handleBack = () => {
    setMode('list');
    setEditingId(null);
    setSearch('');
  };

  const handleTabSwitch = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMode('list');
    setEditingId(null);
    setSearch('');
    setDeleteConfirm(null);
    setPreviewContent(null);
  };

  // Content block management
  const addContentBlock = (type: 'paragraph' | 'heading' | 'list') => {
    const newBlock: NewsContentBlock =
      type === 'list'
        ? { type: 'list', items: [''] }
        : { type, text: '' };
    setForm({ ...form, content: [...form.content, newBlock] });
  };

  const updateContentBlock = (index: number, updates: Partial<NewsContentBlock>) => {
    const newContent = [...form.content];
    newContent[index] = { ...newContent[index], ...updates };
    setForm({ ...form, content: newContent });
  };

  const removeContentBlock = (index: number) => {
    setForm({ ...form, content: form.content.filter((_, i) => i !== index) });
  };

  const moveContentBlock = (index: number, direction: 'up' | 'down') => {
    const newContent = [...form.content];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= newContent.length) return;
    [newContent[index], newContent[target]] = [newContent[target], newContent[index]];
    setForm({ ...form, content: newContent });
  };

  const addListItem = (blockIndex: number) => {
    const newContent = [...form.content];
    const block = newContent[blockIndex];
    if (block.items) {
      block.items = [...block.items, ''];
    }
    setForm({ ...form, content: newContent });
  };

  const updateListItem = (blockIndex: number, itemIndex: number, value: string) => {
    const newContent = [...form.content];
    const block = newContent[blockIndex];
    if (block.items) {
      block.items[itemIndex] = value;
    }
    setForm({ ...form, content: newContent });
  };

  const removeListItem = (blockIndex: number, itemIndex: number) => {
    const newContent = [...form.content];
    const block = newContent[blockIndex];
    if (block.items) {
      block.items = block.items.filter((_, i) => i !== itemIndex);
    }
    setForm({ ...form, content: newContent });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Newspaper className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold">GIC Admin CMS</h1>
              <p className="text-xs text-gray-400">Content Management</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              View Site
            </Link>
            <button
              onClick={logout}
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
        {/* Tab Bar */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0">
            <button
              onClick={() => handleTabSwitch('news')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'news'
                  ? 'border-red-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              News Articles
            </button>
            <button
              onClick={() => handleTabSwitch('projects')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'projects'
                  ? 'border-red-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              Projects
            </button>
            <button
              onClick={() => handleTabSwitch('images')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'images'
                  ? 'border-red-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Site Images
            </button>
          </div>
        </div>
      </header>

      {/* Save notification */}
      {saveMessage && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-600 text-white text-sm px-4 py-2.5 rounded-lg shadow-lg animate-in slide-in-from-right">
          {saveMessage}
        </div>
      )}

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===================== NEWS TAB ===================== */}
        {activeTab === 'news' && (
          <>
        {mode === 'list' ? (
          <>
            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Total Articles</p>
                <p className="text-3xl font-light text-slate-900 mt-1">{articles.length}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Categories</p>
                <p className="text-3xl font-light text-slate-900 mt-1">
                  {new Set(articles.map((a) => a.category)).size}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Latest Update</p>
                <p className="text-lg font-light text-slate-900 mt-1">
                  {articles[0]?.date || 'None'}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-light text-slate-900">All Articles</h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={handleCreate}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  New Article
                </button>
              </div>
            </div>

            {/* Article List */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {filteredArticles.length === 0 ? (
                <div className="p-12 text-center">
                  <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">
                    {search ? 'No articles match your search.' : 'No articles yet. Create your first one!'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="p-4 sm:p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Thumbnail */}
                        <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={article.image.replace('w=1200', 'w=200')}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h3 className="text-sm font-medium text-slate-900 truncate">
                                {article.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 mt-1">
                                <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">
                                  {article.category}
                                </span>
                                <span className="text-xs text-gray-400">{article.date}</span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-400">{article.author}</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{article.excerpt}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <button
                                onClick={() =>
                                  setPreviewContent(previewContent === article.id ? null : article.id)
                                }
                                className="p-2 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Preview"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleEdit(article)}
                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              {deleteConfirm === article.id ? (
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleDelete(article.id)}
                                    className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteConfirm(article.id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Preview expand */}
                          {previewContent === article.id && (
                            <div className="mt-3 p-4 bg-gray-50 rounded-lg border text-xs text-gray-600 max-h-48 overflow-y-auto">
                              {article.content.map((block, i) => {
                                if (block.type === 'heading')
                                  return (
                                    <p key={i} className="font-semibold text-slate-900 mt-2 mb-1">
                                      {block.text}
                                    </p>
                                  );
                                if (block.type === 'paragraph')
                                  return (
                                    <p key={i} className="mb-2 leading-relaxed">
                                      {block.text}
                                    </p>
                                  );
                                if (block.type === 'list')
                                  return (
                                    <ul key={i} className="mb-2 ml-4 list-disc">
                                      {block.items?.map((item, j) => (
                                        <li key={j}>{item}</li>
                                      ))}
                                    </ul>
                                  );
                                return null;
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Editor Form */
          <div>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-900 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </button>

            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-light text-slate-900 mb-6">
                {mode === 'create' ? 'Create New Article' : 'Edit Article'}
              </h2>

              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="Enter article title"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Excerpt <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={form.excerpt}
                      onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                      placeholder="Brief summary of the article"
                      rows={2}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      placeholder="e.g. Engineering, Safety"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Author <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                      placeholder="Author name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Date
                    </label>
                    <input
                      type="text"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      placeholder="e.g. 19 August 2025"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={form.readTime}
                      onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                      placeholder="e.g. 5 min read"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Featured Image URL
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={form.image}
                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                      {form.image && (
                        <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 border">
                          <img src={form.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-slate-900">Article Content</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => addContentBlock('heading')}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        + Heading
                      </button>
                      <button
                        onClick={() => addContentBlock('paragraph')}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        + Paragraph
                      </button>
                      <button
                        onClick={() => addContentBlock('list')}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        + List
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {form.content.map((block, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {block.type === 'heading'
                              ? '📌 Heading'
                              : block.type === 'paragraph'
                              ? '📝 Paragraph'
                              : '📋 List'}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => moveContentBlock(index, 'up')}
                              disabled={index === 0}
                              className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                            >
                              <ChevronUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => moveContentBlock(index, 'down')}
                              disabled={index === form.content.length - 1}
                              className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                            >
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => removeContentBlock(index)}
                              className="p-1 text-gray-400 hover:text-red-600"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {block.type === 'list' ? (
                          <div className="space-y-2">
                            {block.items?.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 w-4">{itemIdx + 1}.</span>
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) => updateListItem(index, itemIdx, e.target.value)}
                                  className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent"
                                  placeholder="List item..."
                                />
                                <button
                                  onClick={() => removeListItem(index, itemIdx)}
                                  className="p-1 text-gray-400 hover:text-red-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => addListItem(index)}
                              className="text-xs text-red-600 hover:text-red-700 mt-1"
                            >
                              + Add list item
                            </button>
                          </div>
                        ) : (
                          <textarea
                            value={block.text || ''}
                            onChange={(e) => updateContentBlock(index, { text: e.target.value })}
                            rows={block.type === 'heading' ? 1 : 3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent resize-none"
                            placeholder={
                              block.type === 'heading' ? 'Section heading...' : 'Write your content...'
                            }
                          />
                        )}
                      </div>
                    ))}

                    {form.content.length === 0 && (
                      <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-lg">
                        <p className="text-sm text-gray-400">
                          No content blocks yet. Add headings, paragraphs, or lists above.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {mode === 'create' ? 'Publish Article' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
          </>
        )}

        {/* ===================== PROJECTS TAB ===================== */}
        {activeTab === 'projects' && (
          <>
        {mode === 'list' ? (
          <>
            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Total Projects</p>
                <p className="text-3xl font-light text-slate-900 mt-1">{projects.length}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-3xl font-light text-emerald-600 mt-1">
                  {projects.filter((p) => p.status === 'Completed').length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Ongoing</p>
                <p className="text-3xl font-light text-blue-600 mt-1">
                  {projects.filter((p) => p.status === 'Ongoing').length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Categories</p>
                <p className="text-3xl font-light text-slate-900 mt-1">
                  {new Set(projects.map((p) => p.category)).size}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-light text-slate-900">All Projects</h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={handleCreateProject}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
            </div>

            {/* Project List */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {filteredProjects.length === 0 ? (
                <div className="p-12 text-center">
                  <FolderKanban className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">
                    {search ? 'No projects match your search.' : 'No projects yet. Create your first one!'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="p-4 sm:p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Thumbnail */}
                        <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={project.image.replace('w=800', 'w=200')}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h3 className="text-sm font-medium text-slate-900 truncate">
                                {project.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 mt-1">
                                <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">
                                  {project.category}
                                </span>
                                <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                                  project.status === 'Completed'
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {project.status}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" /> {project.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {project.year}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <DollarSign className="w-3 h-3" /> {project.value}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{project.scope}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <button
                                onClick={() => handleEditProject(project)}
                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              {deleteConfirm === project.id ? (
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleDeleteProject(project.id)}
                                    className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteConfirm(project.id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Project Editor Form */
          <div>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-slate-900 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>

            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-light text-slate-900 mb-6">
                {mode === 'create' ? 'Create New Project' : 'Edit Project'}
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      placeholder="Enter project title"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                      placeholder="e.g. Offshore, Pipeline, Processing"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={projectForm.location}
                      onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                      placeholder="e.g. Niger Delta, Nigeria"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Year
                    </label>
                    <input
                      type="text"
                      value={projectForm.year}
                      onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                      placeholder="e.g. 2024"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Value
                    </label>
                    <input
                      type="text"
                      value={projectForm.value}
                      onChange={(e) => setProjectForm({ ...projectForm, value: e.target.value })}
                      placeholder="e.g. $45M"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Status
                    </label>
                    <select
                      value={projectForm.status}
                      onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value as 'Completed' | 'Ongoing' })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-white"
                    >
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Scope / Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={projectForm.scope}
                      onChange={(e) => setProjectForm({ ...projectForm, scope: e.target.value })}
                      placeholder="Describe the project scope and deliverables..."
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Image URL
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={projectForm.image}
                        onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                      {projectForm.image && (
                        <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 border">
                          <img src={projectForm.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveProject}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {mode === 'create' ? 'Create Project' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
          </>
        )}
        {/* ===================== IMAGES TAB ===================== */}
        {activeTab === 'images' && (
          <>
            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Total Images</p>
                <p className="text-3xl font-light text-slate-900 mt-1">
                  {Object.keys(siteImages).length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Customized</p>
                <p className="text-3xl font-light text-red-600 mt-1">
                  {Object.keys(siteImages).filter((k) => isImageCustomized(k)).length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500">Pages Covered</p>
                <p className="text-3xl font-light text-slate-900 mt-1">
                  {pageImageConfigs.length}
                </p>
              </div>
            </div>

            {/* Reset All Button */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-slate-900">Manage Site Images</h2>
              <button
                onClick={() => {
                  if (window.confirm('Reset ALL images to defaults? This cannot be undone.')) {
                    resetAllImages();
                    setImageUrlInputs({});
                    setUploadPreviews({});
                    setSaveMessage('All images reset to defaults!');
                    setTimeout(() => setSaveMessage(''), 2000);
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset All to Defaults
              </button>
            </div>

            {/* Page Sub-tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {pageImageConfigs.map((config, idx) => (
                <button
                  key={config.page}
                  onClick={() => setActiveImagePage(idx)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeImagePage === idx
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>

            {/* Image Sections */}
            {pageImageConfigs[activeImagePage] && (
              <div className="space-y-8">
                {pageImageConfigs[activeImagePage].sections.map((section) => (
                  <div key={section.section} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                        {section.label}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {section.images.map((img) => {
                          const currentUrl = siteImages[img.key] || img.defaultUrl;
                          const customized = isImageCustomized(img.key);
                          const isEditing = editingImageKey === img.key;
                          const inputUrl = imageUrlInputs[img.key] ?? '';

                          return (
                            <div key={img.key} className="border border-gray-200 rounded-xl overflow-hidden group">
                              {/* Image Preview */}
                              <div className="relative h-40 bg-gray-100">
                                <img
                                  src={currentUrl}
                                  alt={img.label}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23f3f4f6" width="100" height="100"/><text x="50%" y="50%" fill="%239ca3af" text-anchor="middle" dy=".3em" font-size="12">No Image</text></svg>';
                                  }}
                                />
                                {customized && (
                                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                                    Customized
                                  </div>
                                )}
                              </div>

                              {/* Info & Controls */}
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-sm font-medium text-slate-900 truncate">{img.label}</h4>
                                </div>

                                {isEditing ? (
                                  <div className="space-y-3">
                                    {/* Tab Switcher */}
                                    <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                                      <button
                                        onClick={() => setImageEditTab({ ...imageEditTab, [img.key]: 'url' })}
                                        className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-colors ${
                                          (imageEditTab[img.key] ?? 'url') === 'url'
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                      >
                                        <Link2 className="w-3 h-3" />
                                        URL
                                      </button>
                                      <button
                                        onClick={() => setImageEditTab({ ...imageEditTab, [img.key]: 'upload' })}
                                        className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-colors ${
                                          (imageEditTab[img.key] ?? 'url') === 'upload'
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                      >
                                        <Upload className="w-3 h-3" />
                                        Upload
                                      </button>
                                    </div>

                                    {(imageEditTab[img.key] ?? 'url') === 'url' ? (
                                      /* URL Input */
                                      <div>
                                        <label className="block text-xs text-gray-500 mb-1">Image URL</label>
                                        <input
                                          type="text"
                                          value={inputUrl}
                                          onChange={(e) => setImageUrlInputs({ ...imageUrlInputs, [img.key]: e.target.value })}
                                          placeholder="https://... or /filename.jpg"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        />
                                        {/* Preview of URL */}
                                        {inputUrl && (
                                          <div className="mt-2 h-20 bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                              src={inputUrl}
                                              alt="Preview"
                                              className="w-full h-full object-cover"
                                              onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><rect fill="%23fef2f2" width="100" height="50"/><text x="50%" y="50%" fill="%23dc2626" text-anchor="middle" dy=".3em" font-size="8">Invalid URL</text></svg>';
                                              }}
                                            />
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      /* Upload Input */
                                      <div>
                                        <label className="block text-xs text-gray-500 mb-1">Upload Image File</label>
                                        <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 hover:bg-red-50/30 transition-colors">
                                          {uploadPreviews[img.key] ? (
                                            <img
                                              src={uploadPreviews[img.key]}
                                              alt="Upload preview"
                                              className="w-full h-full object-cover rounded-lg"
                                            />
                                          ) : (
                                            <div className="flex flex-col items-center gap-1">
                                              <Upload className="w-5 h-5 text-gray-400" />
                                              <span className="text-[11px] text-gray-400">Click to choose file</span>
                                              <span className="text-[10px] text-gray-300">PNG, JPG, GIF, WebP</span>
                                            </div>
                                          )}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                              const file = e.target.files?.[0];
                                              if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (ev) => {
                                                  const dataUrl = ev.target?.result as string;
                                                  setUploadPreviews({ ...uploadPreviews, [img.key]: dataUrl });
                                                  setImageUrlInputs({ ...imageUrlInputs, [img.key]: dataUrl });
                                                };
                                                reader.readAsDataURL(file);
                                              }
                                            }}
                                          />
                                        </label>
                                        {uploadPreviews[img.key] && (
                                          <button
                                            onClick={() => {
                                              setUploadPreviews({ ...uploadPreviews, [img.key]: '' });
                                              setImageUrlInputs({ ...imageUrlInputs, [img.key]: '' });
                                            }}
                                            className="mt-1 text-[11px] text-gray-400 hover:text-red-600 transition-colors"
                                          >
                                            × Remove
                                          </button>
                                        )}
                                      </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => {
                                          if (inputUrl.trim()) {
                                            setImage(img.key, inputUrl.trim());
                                            setSaveMessage(`${img.label} updated!`);
                                            setTimeout(() => setSaveMessage(''), 2000);
                                          }
                                          setEditingImageKey(null);
                                          setImageUrlInputs({ ...imageUrlInputs, [img.key]: '' });
                                          setUploadPreviews({ ...uploadPreviews, [img.key]: '' });
                                        }}
                                        disabled={!inputUrl.trim()}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                      >
                                        <Check className="w-3 h-3" />
                                        Save
                                      </button>
                                      <button
                                        onClick={() => {
                                          setEditingImageKey(null);
                                          setImageUrlInputs({ ...imageUrlInputs, [img.key]: '' });
                                          setUploadPreviews({ ...uploadPreviews, [img.key]: '' });
                                        }}
                                        className="px-3 py-2 border border-gray-300 text-gray-600 rounded-lg text-xs hover:bg-gray-50 transition-colors"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-2">
                                    <p className="text-[11px] text-gray-400 truncate" title={currentUrl}>
                                      {currentUrl.length > 50 ? currentUrl.substring(0, 50) + '...' : currentUrl}
                                    </p>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => {
                                          setEditingImageKey(img.key);
                                          setImageUrlInputs({ ...imageUrlInputs, [img.key]: currentUrl });
                                        }}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
                                      >
                                        <ImageIcon className="w-3 h-3" />
                                        Change Image
                                      </button>
                                      {customized && (
                                        <button
                                          onClick={() => {
                                            resetImage(img.key);
                                            setSaveMessage(`${img.label} reset to default!`);
                                            setTimeout(() => setSaveMessage(''), 2000);
                                          }}
                                          className="p-2 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-red-600 transition-colors"
                                          title="Reset to default"
                                        >
                                          <RotateCcw className="w-3.5 h-3.5" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
