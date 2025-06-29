import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = t('language') === 'fr' ? [
    {
      id: 1,
      title: 'Vasectomie sans bistouri : Tout ce que vous devez savoir',
      excerpt: 'Découvrez les avantages de la technique moderne de vasectomie sans bistouri, ses bénéfices et pourquoi elle est devenue la méthode de choix.',
      author: 'Dr Mélanie Savard-Côté',
      date: '15 mars 2024',
      readTime: '5 min',
      category: 'Procédure',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Récupération après vasectomie : Guide complet',
      excerpt: 'Un guide détaillé sur ce à quoi s\'attendre pendant la période de récupération, les soins post-opératoires et les conseils pour une guérison optimale.',
      author: 'Dr Mélanie Savard-Côté',
      date: '8 mars 2024',
      readTime: '7 min',
      category: 'Récupération',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Vasectomie vs autres méthodes contraceptives',
      excerpt: 'Comparaison détaillée entre la vasectomie et les autres méthodes contraceptives en termes d\'efficacité, coût et praticité.',
      author: 'Dr Mélanie Savard-Côté',
      date: '1 mars 2024',
      readTime: '6 min',
      category: 'Comparaison',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Mythes et réalités sur la vasectomie',
      excerpt: 'Démystifions les idées reçues les plus communes sur la vasectomie avec des faits scientifiques et des témoignages de patients.',
      author: 'Dr Mélanie Savard-Côté',
      date: '22 février 2024',
      readTime: '4 min',
      category: 'Éducation',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Préparation à votre consultation de vasectomie',
      excerpt: 'Comment bien se préparer pour votre première consultation, quelles questions poser et à quoi s\'attendre lors de votre visite.',
      author: 'Dr Mélanie Savard-Côté',
      date: '15 février 2024',
      readTime: '5 min',
      category: 'Consultation',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'L\'impact psychologique de la vasectomie',
      excerpt: 'Explorer les aspects émotionnels et psychologiques de la décision de vasectomie et comment bien vivre cette transition.',
      author: 'Dr Mélanie Savard-Côté',
      date: '8 février 2024',
      readTime: '6 min',
      category: 'Bien-être',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ] : [
    {
      id: 1,
      title: 'No-Scalpel Vasectomy: Everything You Need to Know',
      excerpt: 'Discover the advantages of the modern no-scalpel vasectomy technique, its benefits and why it has become the method of choice.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'March 15, 2024',
      readTime: '5 min',
      category: 'Procedure',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Recovery After Vasectomy: Complete Guide',
      excerpt: 'A detailed guide on what to expect during the recovery period, post-operative care and tips for optimal healing.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'March 8, 2024',
      readTime: '7 min',
      category: 'Recovery',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Vasectomy vs Other Contraceptive Methods',
      excerpt: 'Detailed comparison between vasectomy and other contraceptive methods in terms of effectiveness, cost and practicality.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'March 1, 2024',
      readTime: '6 min',
      category: 'Comparison',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Myths and Facts About Vasectomy',
      excerpt: 'Let\'s debunk the most common misconceptions about vasectomy with scientific facts and patient testimonials.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'February 22, 2024',
      readTime: '4 min',
      category: 'Education',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Preparing for Your Vasectomy Consultation',
      excerpt: 'How to properly prepare for your first consultation, what questions to ask and what to expect during your visit.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'February 15, 2024',
      readTime: '5 min',
      category: 'Consultation',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'The Psychological Impact of Vasectomy',
      excerpt: 'Exploring the emotional and psychological aspects of the vasectomy decision and how to navigate this transition well.',
      author: 'Dr Mélanie Savard-Côté',
      date: 'February 8, 2024',
      readTime: '6 min',
      category: 'Well-being',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = t('language') === 'fr' 
    ? ['Tous', 'Procédure', 'Récupération', 'Comparaison', 'Éducation', 'Consultation', 'Bien-être']
    : ['All', 'Procedure', 'Recovery', 'Comparison', 'Education', 'Consultation', 'Well-being'];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('blog.title')}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
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
            {blogPosts.map((post) => (
              <article key={post.id} className="card group hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
                    <span>{t('language') === 'fr' ? 'Lire l\'article' : 'Read article'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
            {t('language') === 'fr' ? 'Restez informé' : 'Stay informed'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('language') === 'fr' 
              ? 'Recevez nos derniers articles et conseils sur la santé masculine directement dans votre boîte email'
              : 'Receive our latest articles and men\'s health tips directly in your email inbox'
            }
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t('language') === 'fr' ? 'Votre adresse email' : 'Your email address'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
              <button className="btn-coral px-6 py-3 whitespace-nowrap">
                {t('language') === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </button>
            </div>
            <p className="text-sm text-white/70 mt-3">
              {t('language') === 'fr' 
                ? 'Pas de spam, désabonnement facile à tout moment'
                : 'No spam, easy unsubscribe at any time'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
