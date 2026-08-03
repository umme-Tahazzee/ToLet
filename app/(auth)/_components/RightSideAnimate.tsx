import React from 'react'

const RightSideAnimate = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/5 via-background to-primary/10 items-center justify-center p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circle 1 */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-pulse"></div>
          {/* Floating circle 2 */}
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          {/* Animated gradient line */}
          <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-lg rotate-45 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-sm">
          {/* Animated icon */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary/30 animate-bounce">
              <div className="text-7xl">🏠</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            Find Your Home
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with properties and landlords that match your needs
            perfectly
          </p>

          {/* Feature list with animation */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="text-muted-foreground">
                Browse verified listings
              </span>
            </div>
            <div
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="w-3 h-3 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <span className="text-muted-foreground">
                Instant messaging system
              </span>
            </div>
            <div
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div
                className="w-3 h-3 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <span className="text-muted-foreground">Secure transactions</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightSideAnimate