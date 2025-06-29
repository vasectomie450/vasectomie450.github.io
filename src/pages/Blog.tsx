import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Vasectomie vs autres méthodes contraceptives: comparaison complète',
      excerpt: 'Découvrez pourquoi la vasectomie est souvent le choix le plus économique et efficace pour les couples qui ont terminé leur famille.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Comparaison',
      featured: true
    },
    {
      id: 2,
      title: 'Récupération après vasectomie: guide complet jour par jour',
      excerpt: 'Tout ce que vous devez savoir sur la période de récupération, les soins post-opératoires et le retour aux activités normales.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Récupération'
    },
    {
      id: 3,
      title: '10 mythes sur la vasectomie démystifiés par un expert',
      excerpt: 'Dr Savard-Côté répond aux idées reçues les plus communes sur la vasectomie et rétablit les faits scientifiques.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Éducation'
    },
    {
      id: 4,
      title: 'Technique sans bistouri: révolution en vasectomie',
      excerpt: 'Comment la technique sans bistouri a transformé la vasectomie en procédure plus confortable et plus sûre.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '4 min',
      category: 'Technique'
    },
    {
      id: 5,
      title: 'Vasectomie et vie de couple: témoignages de patients',
      excerpt: 'Des couples partagent leur expérience et expliquent comment la vasectomie a amélioré leur qualité de vie.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-20',
      readTime: '8 min',
      category: 'Témoignages'
    },
    {
      id: 6,
      title: 'Coût de la vasectomie: investissement à long terme',
      excerpt: 'Analyse détaillée des coûts comparés des différentes méthodes contraceptives sur 10 ans.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-15',
      readTime: '5 min',
      category: 'Finances'
    }
  ];

  const categories = ['Tous', 'Comparaison', 'Récupération', 'Éducation', 'Technique', 'Témoignages', 'Finances'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Actualités</span> et conseils
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Restez informé avec nos derniers articles sur la vasectomie, 
            les conseils d'experts et les témoignages de patients
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-2 bg-coral-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium">
                <Tag className="w-4 h-4" />
                <span>Article vedette</span>
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('fr-CA')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-2 btn-primary"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('fr-CA')}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>Lire plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Restez informé
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils d'experts directement dans votre boîte mail
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="btn-coral px-6 py-3">
                S'abonner
              </button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              Pas de spam, désabonnement facile à tout moment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
