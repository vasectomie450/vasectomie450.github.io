import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ReviewsErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Reviews component error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Problème de chargement des avis
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous ne pouvons pas charger les avis Google en ce moment. 
                  Veuillez réessayer ou consulter nos avis directement sur Google.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={this.handleRetry}
                    className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Réessayer</span>
                  </button>
                  <a
                    href={`https://www.google.com/maps/place/?q=place_id:${import.meta.env.VITE_GOOGLE_PLACE_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors duration-200"
                  >
                    <span>Voir sur Google</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ReviewsErrorBoundary;
