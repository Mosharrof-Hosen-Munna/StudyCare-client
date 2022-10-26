import React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import CommentCard from "./CommentCard/CommentCard";
import { Link } from "react-router-dom";

const CourseDetails = () => {
    const arr = [
        {
          "_id":"0282e0e58a5c404fbd15261f11c2ab6b",
          "name":"Data Science Fundamental Course",
          "category_id":"01",
          "category_name":"Data Science",
          "rating":{
            "number":4.5,
            "badge":"Excellent",
            "total":"25"
          },
          "price": "$70",
          "total_view":488,
          "published_date":"2022-08-24 17:27:34",
          "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMz-TXof73PLOzZSPj1wSh4J2gLUNM4-xVg&usqp=CAU",
          "description":"Data science is an interdisciplinary field[8] focused on extracting knowledge from typically large data sets and applying the knowledge and insights from that data to solve problems in a wide range of application domains.[9] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics, information science, mathematics, data visualization, information visualization, data sonification, data integration, graphic design, complex systems, communication and business.[10][11] Statistician Nathan Yau, drawing on Ben Fry, also links data science to human–computer interaction: users should be able to intuitively control and explore data.[12][13] In 2015, the American Statistical Association identified database management, statistics and machine learning, and distributed and parallel systems as the three emerging foundational professional communities.[14] Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[15] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[16] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data (e.g. from images, text, sensors, transactions or customer information, etc) and emphasizes prediction and action.[17] Andrew Gelman of Columbia University has described statistics as a nonessential part of data science.[18] Stanford professor David Donoho writes that data science is not distinguished from statistics by the size of datasets or use of computing and that many graduate programs misleadingly advertise their analytics and statistics training as the essence of a data-science program. He describes data science as an applied field growing out of traditional statistics.[19]",
          "instructor":{
            "name":"Mosharrof Hosen Munna",
            "profile":"https://placeimg.com/192/192/people",
            "update":"July 24, 2022",
            "star":"4.5"
          },
          "reviews":[
            {
              "name":"Eleanor Fant",
              "profile":"https://placeimg.com/192/192/people",
              "comment":"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
              "date":"July 14, 2022",
              "rating":"4"
            },
            {
              "name":"Shahnewaz Sakil",
              "profile":"https://placeimg.com/192/192/people",
              "comment":"David blatant have it, standard A bit of how's your father my lady absolutely.",
              "date":"July 14, 2022",
              "rating":"4"
            }
          ]
        },
        {
            "_id":"0282e0e58a5c404fbd1asdfasdfhsde",
            "name":"The business Intelligence analyst Course 2022",
            "category_id":"02",
            "category_name":"Business",
            "rating":{
              "number":5,
              "badge":"Excellent",
              "total":"69"
            },
            
          "price": "$99",
            "total_view":500,
            "published_date":"2022-07-20 17:27:34",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMz-TXof73PLOzZSPj1wSh4J2gLUNM4-xVg&usqp=CAU",
            "description":"A sole proprietorship, also known as a sole trader, is owned by one person and operates for their benefit. The owner operates the business alone and may hire employees. A sole proprietor has unlimited liability for all obligations incurred by the business, whether from operating costs or judgments against the business. All assets of the business belong to a sole proprietor, including, for example, a computer infrastructure, any inventory, manufacturing equipment, or retail fixtures, as well as any real property owned by the sole proprietor.A partnership is a business owned by two or more people. In most forms of partnerships, each partner has unlimited liability for the debts incurred by the business. The three most prevalent types of for-profit partnerships are general partnerships, limited partnerships, and limited liability partnerships.[6]Corporations' owners have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned, and they can organize either for profit or as nonprofit organizations. A privately owned, for-profit corporation is owned by its shareholders, who elect a board of directors to direct the corporation and hire its managerial staff. A privately owned, for-profit corporation can be either privately held by a small group of individuals, or publicly held, with publicly traded shares listed on a stock exchange.A cooperative or co-op is a limited-liability business that can organize as for-profit or not-for-profit. A cooperative differs from a corporation in that it has members, not shareholders, and they share decision-making authority. Cooperatives are typically classified as either consumer cooperatives or worker cooperatives. Cooperatives are fundamental to the ideology of economic democracy.Limited liability companies (LLC), and other specific types of business organization protect their owners or shareholders from business failure by doing business under a separate legal entity with certain legal protections. In contrast, a general partnership or persons working on their own are usually not as protected.",
            "instructor":{
              "name":"Elon Gated",
              "profile":"https://placeimg.com/192/192/people",
              "update":"October 24, 2022",
              "star":"4.8"
            },
            "reviews":[
              {
                "name":"Eleanor Fant",
                "profile":"https://placeimg.com/192/192/people",
                "comment":"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
                "date":"July 14, 2022",
                "rating":"4"
              },
              {
                "name":"Shahnewaz Sakil",
                "profile":"https://placeimg.com/192/192/people",
                "comment":"David blatant have it, standard A bit of how's your father my lady absolutely.",
                "date":"July 14, 2022",
                "rating":"4"
              }
            ]
          },
        {
            "_id":"0282e0e58a5c404fbd1asdfasdfhsde",
            "name":"Creative writing through Storytelling",
            "category_id":"03",
            "category_name":"Art & Design",
            "rating":{
              "number":4.0,
              "badge":"Excellent",
              "total":"155"
            },
            
          "price": "$52",
            "total_view":300,
            "published_date":"2021-07-20 17:27:34",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMz-TXof73PLOzZSPj1wSh4J2gLUNM4-xVg&usqp=CAU",
            "description":"With regards to the literary art and the musical arts, Aristotle considered epic poetry, tragedy, comedy, Dithyrambic poetry and music to be mimetic or imitative art, each varying in imitation by medium, object, and manner.[14] For example, music imitates with the media of rhythm and harmony, whereas dance imitates with rhythm alone, and poetry with language. The forms also differ in their object of imitation. Comedy, for instance, is a dramatic imitation of men worse than average; whereas tragedy imitates men slightly better than average. Lastly, the forms differ in their manner of imitation—through narrative or character, through change or no change, and through drama or no drama.[15] Aristotle believed that imitation is natural to mankind and constitutes one of mankind's advantages over animals.[16]The more recent and specific sense of the word art as an abbreviation for creative art or fine art emerged in the early 17th century.[17] Fine art refers to a skill used to express the artist's creativity, or to engage the audience's aesthetic sensibilities, or to draw the audience towards consideration of more refined or finer work of art.Within this latter sense, the word art may refer to several things: (i) a study of a creative skill, (ii) a process of using the creative skill, (iii) a product of the creative skill, or (iv) the audience's experience with the creative skill. The creative arts (art as discipline) are a collection of disciplines which produce artworks (art as objects) that are compelled by a personal drive (art as activity) and convey a message, mood, or symbolism for the perceiver to interpret (art as experience). Art is something that stimulates an individual's thoughts, emotions, beliefs, or ideas through the senses. Works of art can be explicitly made for this purpose or interpreted on the basis of images or objects. For some scholars, such as Kant, the sciences and the arts could be distinguished by taking science as representing the domain of knowledge and the arts as representing the domain of the freedom of artistic expression.",
            "instructor":{
              "name":"Abir Hasan",
              "profile":"https://placeimg.com/192/192/people",
              "update":"October 08, 2020",
              "star":"4.1"
            },
            "reviews":[
              {
                "name":"Eleanor Fant",
                "profile":"https://placeimg.com/192/192/people",
                "comment":"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
                "date":"July 14, 2022",
                "rating":"4"
              },
              {
                "name":"Shahnewaz Sakil",
                "profile":"https://placeimg.com/192/192/people",
                "comment":"David blatant have it, standard A bit of how's your father my lady absolutely.",
                "date":"July 14, 2022",
                "rating":"4"
              }
            ]
          }
      ]
  const course = {
    _id: "0282e0e58a5c404fbd15261f11c2ab6b",
    name: "Data Science Fundamental Course",
    category_id: "03",
    category_name: "Data Science",
    rating: {
      number: 4.5,
      badge: "Excellent",
      total: "25",
    },
    total_view: 488,
    published_date: "2022-08-24 17:27:34",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMz-TXof73PLOzZSPj1wSh4J2gLUNM4-xVg&usqp=CAU",
    description:
      "Data science is an interdisciplinary field[8] focused on extracting knowledge from typically large data sets and applying the knowledge and insights from that data to solve problems in a wide range of application domains.[9] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics, information science, mathematics, data visualization, information visualization, data sonification, data integration, graphic design, complex systems, communication and business.[10][11] Statistician Nathan Yau, drawing on Ben Fry, also links data science to human–computer interaction: users should be able to intuitively control and explore data.[12][13] In 2015, the American Statistical Association identified database management, statistics and machine learning, and distributed and parallel systems as the three emerging foundational professional communities.[14] Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[15] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[16] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data (e.g. from images, text, sensors, transactions or customer information, etc) and emphasizes prediction and action.[17] Andrew Gelman of Columbia University has described statistics as a nonessential part of data science.[18] Stanford professor David Donoho writes that data science is not distinguished from statistics by the size of datasets or use of computing and that many graduate programs misleadingly advertise their analytics and statistics training as the essence of a data-science program. He describes data science as an applied field growing out of traditional statistics.[19]",
    instructor: {
      name: "Mosharrof Hosen Munna",
      profile: "https://placeimg.com/192/192/people",
      update: "July 24, 2022",
      star: "4.5",
    },
    reviews: [
      {
        name: "Eleanor Fant",
        profile: "https://placeimg.com/192/192/people",
        comment:
          "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        date: "July 14, 2022",
        rating: "4",
      },
      {
        name: "Shahnewaz Sakil",
        profile: "https://placeimg.com/192/192/people",
        comment:
          "David blatant have it, standard A bit of how's your father my lady absolutely.",
        date: "July 14, 2022",
        rating: "4",
      },
    ],
  };

  return (
    <div>
      {/* course header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-semibold text-primary">{course.name}</h1>
        <Link to={`/courses/checkout/${course._id}`}>
        <button className="btn btn-outline btn-primary btn-sm font-bold shadow-md">
          Chekout{" "}
        </button>
        </Link>
      </div>
      {/* course thumbnail */}
      <div>
        <img className="w-full" src={course.img} alt="" />
      </div>
      {/* course info */}
      <div className="flex justify-between items-center">
        <div className="my-8 flex items-center">
          <div className="avatar mr-4 ">
            <div className="w-14 rounded-full">
              <img src={course.instructor.profile} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-samibold">Instructor</h3>
            <h4 className="text-xl font-bold">{course.instructor.name}</h4>
          </div>
        </div>
        {/* rating */}
        <div>
          <h5 className="text-lg font-semibold ">Instructor Rating: </h5>
          <div className="flex items-center text-rose-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-black font-semibold">
              ({course.instructor.star})
            </span>
          </div>
        </div>
      </div>
      {/* course description */}
      <div className="text-lg leading-8	 mb-8">
        {course.description.slice(0, 350)} <br /> <br />{" "}
        {course.description.slice(350, 700)} <br /> <br />{" "}
        {course.description.slice(700)}
      </div>
      <div className="flex justify-end">
      <Link to={`/courses/checkout/${course._id}`}>
      <button className="btn  btn-primary btn-md font-bold shadow-md">
          Chekout Course{" "}
        </button>
        </Link>
      </div>
      {/* reviews and comment */}
      <div>
        <div>
          <h1 className="text-3xl text-primary font-semibold mb-4">Reviews</h1>
          <div className="flex justify-between items-center">
            <h5 className="text-xl font-semibold ">
              Badge: {course.rating.badge}
            </h5>
            <div className="flex items-center text-rose-600">
              <div className="text-xl font-semibold text-black">Rating: </div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-black font-semibold">
                ({course.rating.number})
              </span>
            </div>
            <h5 className="text-xl font-semibold ">
              Total Reviews: {course.rating.total}
            </h5>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-primary font-semibold mt-8 mb-4">
            Comments
          </h1>
          {course.reviews.map((reviews) => {
            return <CommentCard comment={reviews} />;
          })}
        </div>
      </div>
      {/* write review */}
      <div>
        <h1 className="text-3xl text-primary my-8 font-semibold">Write a Review</h1>

        <div>
          <div className="grid grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input w-full max-w-lg  shadow"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input w-full max-w-lg shadow"
              />
            </div>
          </div>
          <div className="w-full my-4">
          <textarea  className="textarea w-full shadow" rows={8} placeholder="Write your comment"></textarea>
          </div>
          <div className="flex justify-end">
          <button className="btn btn-primary">Submit Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
