import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-red-600 rounded-full animate-spin" 
                 style={{ 
                   borderTopColor: 'transparent',
                   borderLeftColor: 'transparent',
                   animationDuration: '1.5s'
                 }} 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-red-600 fill-current"
              >
                <path d="M4 16c0 1.1.9 2 2 2h1v-2H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-1v2h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v8zm3.5 1c.83 0 1.5-.67 1.5-1.5S8.33 14 7.5 14 6 14.67 6 15.5 6.67 17 7.5 17zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Loading</h2>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 rounded-full animate-[loading_2s_ease-in-out_infinite]"
              style={{
                width: '30%',
                animation: 'loading 2s ease-in-out infinite',
                '@keyframes loading': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(400%)' }
                }
              }}
            />
          </div>
          <p className="text-sm text-gray-500">Please wait while we prepare your journey</p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">Safety</div>
            <div className="mt-1">
              <svg className="w-5 h-5 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">Comfort</div>
            <div className="mt-1">
              <svg className="w-5 h-5 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">On Time</div>
            <div className="mt-1">
              <svg className="w-5 h-5 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;