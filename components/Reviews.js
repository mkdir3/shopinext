import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      content: `
            <p>Super produit, je ne m'attendais pas à ça ! Merci Shopinext pour l'envoie rapide et soigné ✅</p>
          `,
      date: "30 Avril 2022",
      datetime: "2022-04-30",
      author: "Emilie Destouches",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 4,
      content: `
            <p>J'ai été étonnement surpris par la qualité du produit.</p>
          `,
      date: "3 Mai 2022",
      datetime: "2022-05-03",
      author: "Hector Chevreuil",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 py-8">
        Avis client
      </h2>
      <h2 className="sr-only">Avis client</h2>

      <div className="-my-10">
        {reviews.map((review, reviewIdx) => (
          <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
            <div className="flex-none py-10">
              <img
                src={review.avatarSrc}
                alt=""
                className="w-10 h-10 bg-gray-100 rounded-full"
              />
            </div>
            <div
              className={classNames(
                reviewIdx === 0 ? "" : "border-t border-gray-200",
                "flex-1 py-10"
              )}
            >
              <h3 className="font-medium text-gray-900">{review.author}</h3>
              <p>
                <time dateTime={review.datetime}>{review.date}</time>
              </p>

              <div className="flex items-center mt-4">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      review.rating > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{review.rating} sur 5</p>

              <div
                className="mt-4 prose prose-sm max-w-none text-gray-500"
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
