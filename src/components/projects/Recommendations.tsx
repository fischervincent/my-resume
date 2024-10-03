export type Recommendation = {
  author: string;
  authorTitle: string;
  content: string;
  date: string;
  recommendationWebsite: "Malt" | "LinkedIn";
};

type RecommendationsProps = {
  recommendations: Recommendation[] | undefined;
};

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  if (!recommendations) return null;
  return (
    <div className="space-y-4">
      <h1 className="font-sans text-lg font-bold text-gray-600">
        Recommendations
      </h1>
      <div className="flex flex-col p-4 space-y-4">
        {recommendations.map(
          ({ author, authorTitle, content, date, recommendationWebsite }) => (
            <div className="card border border-black border-opacity-10 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center card-title">
                  <img
                    src={`https://eu.ui-avatars.com/api/?name=${author}`}
                    alt={author}
                    className="rounded-full w-8 h-8"
                  />
                  <div className="ml-2">
                    <h5 className="mb-0 font-bold">{author}</h5>
                    <h6 className="mb-0 text-sm font-extralight">
                      {authorTitle}
                    </h6>
                  </div>
                </div>
                <span className="text-sm">{date}</span>
                <p className="mb-0">{content}</p>
                <div className="card-actions justify-end">
                  {recommendationWebsite === "Malt" && (
                    <a
                      href="https://www.malt.fr/profile/vincentfischer1"
                      className="link link-primary flex items-center space-x-1"
                    >
                      <img
                        src="/assets/img/malt.png"
                        alt="Malt"
                        className="w-6 h-6"
                      />
                      <span>Malt.fr</span>
                    </a>
                  )}
                  {recommendationWebsite === "LinkedIn" && (
                    <a
                      href="https://www.linkedin.com/in/vincent-fischer"
                      className="link link-primary flex items-center space-x-1"
                    >
                      <img
                        src="/assets/img/linkedIn34.png"
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                      <span>LinkedIn.com</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
