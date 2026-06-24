export default function AICareerGuidePage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">AI Career Guide</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Learn how to leverage StrideLogic to map your career path and prepare for success with our AI-powered tools.
      </p>

      {/* Embedded Demo Video */}
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/sQc-atxkRgc"
            title="StrideLogic Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}