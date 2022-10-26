import React from 'react'

const CheckOut = () => {
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
        <h1 className='text-3xl text-primary font-semibold'>Checkout! Proceed to your Payment</h1>
    </div>
  )
}

export default CheckOut