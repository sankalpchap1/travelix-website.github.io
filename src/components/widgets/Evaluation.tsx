import HeaderWidget from "../common/HeaderWidget";
import Image from "next/image";
import rmseImage from "~/assets/images/rmse.png";
import aecfImage from "~/assets/images/aecf.png";
import mfImage from "~/assets/images/mf.png";


const evaluationData = {
  header: {
    title: "Evaluation",
  },
  content:
    "Evaluating recommender systems is an essential step in determining their efficacy and impact. These systems are designed to provide personalized recommendations to users, with the goal of improving user engagement and satisfaction. Without proper evaluation, it is impossible to know if the recommender system is achieving its intended objectives. We have performed evaluation for both Matrix Factorization and Autoencoder based Collaborative Filtering models. Let us first check the evaluation for the Autoencoder based Collaborative Filtering model followed by Matrix Factorization.",
  content_first: "Evaluation of recommender systems involves assessing their performance based on specific metrics such as accuracy, coverage, diversity, and novelty. These metrics help to gauge the system's ability to predict user preferences and make relevant recommendations. Additionally, evaluation helps to identify any biases or limitations in the system, providing insight into areas for improvement. By evaluating recommender systems, businesses can make informed decisions about how to optimize their recommender systems to provide better recommendations and ultimately improve user experience.",
  aecf_header: {
    title: "Auto Encoder and Collaborative Filtering",
  },
  content2:
    "After we generate the predicted ratings matrix using the user similarity matrix as the weights on the original ratings matrix we calculate the root mean squared error (RMSE) metric on a held-out test set. We implemented the following api",
  rmseImage: {
    src: rmseImage,
    alt: "Colorful Image",
  },
  content3:
    "Here, we only take the non-zero ratings for evaluation. The function uses the trained model to generate predicted ratings for the test set. Specifically, it extracts the predicted ratings for the test set by taking a slice of the self.user_ratings array from the end of the training set to the end of the matrix along the rows (users) and only including the columns (items) where mask is True. This gives us masked_predicted_ratings. Finally, the function calculates the RMSE between masked_predicted_ratings and masked_actual_ratings, which are the predicted and actual ratings, respectively, for the test set. Here’s the graph of RMSE obtained after training the model for different number of epochs:",
  aecfImage: {
    src: aecfImage,
    alt: "Colorful Image",
  },
  content4:
    "We see that RMSE settles at around 1.6, this means that on average, the predicted rating by the model is off by 1.6 units from the actual rating. This is better than the RMSE value of 2.2 which we got from Matrix Factorization.",
  mf_header: {
    title: "Matrix Factorization",
  },
  content5:
    "We have used the root mean squared error (RMSE) metric to test out the accuracy of our MF model. Using this model we were able to obtain an RMSE value of 2.2 after training our model for 200 epochs. Here’s the graph for MF performance:",
  mfImage: {
    src: mfImage,
    alt: "Colorful Image",
  },
  items: [
    {
      title: "Non-personalized recommendations",
      description:
        "To recommend trending places to visit right now for selected state",
    },
    {
      title: "Personalized recommendations using Matrix Factorization",
    },
    {
      title:
        "Personalized recommendations using Auto Encode and Collaborative Filtering",
      description:
        "Recommendations based on similar users using User-User Collaborative Filtering and Clustering algorithms.",
    },
  ],

  isReversed: false,
  isReversedMF: true,
  isAfterContent: false,
  matrix_header: {
    title: "Matrix Factorization",
  },
  content6:
    "Autoencoders and collaborative filtering are both widely used techniques in the field of machine learning and for designing Recommendation engines. Autoencoders are a type of neural network that can learn to compress and reconstruct high-dimensional data, such as images, while minimizing the reconstruction error. Collaborative filtering, on the other hand, is a technique used for recommendation systems, where the system predicts user preferences based on past behavior and similarity to other users. By analyzing user behavior and preferences, collaborative filtering can suggest products, services, or content that users are likely to enjoy.",
  content7:
    "We have implemented an autoencoder-based collaborative filtering algorithm for personalized recommendation in a travel recommendation system. The autoencoder model is trained on a sparse matrix of user ratings, with the goal of learning embeddings that capture user preferences. The learned embeddings are then used to compute similarity scores between users and items, which are used to predict the ratings of the items for each user. The model is evaluated using the root mean squared error (RMSE) metric on a held-out test set, and the top recommended items for a given user are returned based on the predicted ratings.",
  content8:
    "To implement the Autoencoder, we used 3 hidden dense layers with 64, 32 and 16 neurons during encoding and 2 hidden layers with 32 and 64 neurons during decoding. We are using the ReLU activation function in the hidden layers. We are also sandwiching the dropout layers between all the hidden layers and the last hidden layer and output layer. In the output layer we are using the “sigmoid” as the activation function. To train the Autoencoder as defined above, we are using the “Adam” optimizer and “Binary Cross-Entropy” loss function. After this we train the model taking a batch size of 32 and training the model for 200 epochs. We also implemented a learning rate scheduler to find the optimal hyperparameter during training. We shuffle the data before each epoch and use a validation set as well.",
  content9:
    "Autoencoders can help solve problems in recommendation systems by learning a low-dimensional representation of the data that captures the underlying structure and patterns in the user-item interactions. This can be useful in handling the sparsity and high dimensionality of the data, as well as improving the accuracy and relevance of the recommendations. Autoencoders can also be used in conjunction with other techniques such as collaborative filtering, content-based filtering, and hybrid methods to further improve the performance and robustness of the recommendation system.",
};

const Evaluation = () => (
  <section className="bg-primary-50 dark:bg-slate-800">
    <div
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${evaluationData.isAfterContent ? "pb-16 pt-1 md:pb-20" : "py-16 md:py-20"
        }`}
    >
      {evaluationData.header && (
        <HeaderWidget
          header={evaluationData.header}
          titleClassname="text-3xl sm:text-5xl"
        />
      )}
      <div className="mx-auto max-w-6xl md:px-8">
        <div
          className={`md:flex ${evaluationData.isReversed ? "md:flex-row-reverse" : ""
            } md:gap-16`}
        >
          <div className="self-center">
            {evaluationData.content && (
              <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content}
              </div>
            )}
            
            {evaluationData.content_first && (
              <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content_first}
              </div>
            )}

            {evaluationData.aecf_header && (
              <HeaderWidget
                header={evaluationData.aecf_header}
                titleClassname="pt-16 text-3xl sm:text-4xl"
              />
            )}
            {evaluationData.content2 && (
              <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content2}
              </div>
            )}
            {evaluationData.rmseImage && (
              <div className="relative m-auto mt-14 max-w-4xl">
                <Image
                  src={evaluationData.rmseImage.src}
                  width={300}
                  height={300}
                  alt={evaluationData.rmseImage.alt}
                  sizes="(max-width: 768px) 100vw, 432px"
                  className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                />
              </div>
            )}

            {evaluationData.content3 && (
              <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content3}
              </div>
            )}

            {evaluationData.aecfImage && (
              <div className="relative m-auto mt-14 max-w-4xl">
                <Image
                  src={evaluationData.aecfImage.src}
                  width={300}
                  height={300}
                  alt={evaluationData.aecfImage.alt}
                  sizes="(max-width: 768px) 100vw, 432px"
                  className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                />
              </div>
            )}

            {evaluationData.content4 && (
              <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content4}
              </div>
            )}

            {evaluationData.mf_header && (
              <HeaderWidget
                header={evaluationData.mf_header}
                titleClassname="pt-16 text-3xl sm:text-4xl"
              />
            )}

            {evaluationData.content5 && (
              <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                {evaluationData.content5}
              </div>
            )}

            {evaluationData.mfImage && (
              <div className="relative m-auto mt-14 max-w-4xl">
                <Image
                  src={evaluationData.mfImage.src}
                  width={300}
                  height={300}
                  alt={evaluationData.mfImage.alt}
                  sizes="(max-width: 768px) 100vw, 432px"
                  className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Evaluation;
