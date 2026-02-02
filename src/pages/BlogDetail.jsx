import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import { blogData } from "../constants/Data";
import ScrollingInfo from "../components/ScrollingInfo";
import { Helmet } from "react-helmet-async";

const slugify = (text = "") =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the blog post by ID
  const blog = blogData.find((post) => slugify(post.title) === slug);

  // If blog not found, redirect to blog page
  if (!blog) {
    navigate("/blog");
    return null;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          MAXFIT Physiotherapy | Personalised Physiotherapy & Rehabilitation
          Care
        </title>

        <meta
          name="description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />

        <meta
          name="keywords"
          content="maxfit physiotherapy, physiotherapy near me, physiotherapy clinic near me, physiotherapy treatment, musculoskeletal physiotherapy, women’s health physiotherapy, elderly physiotherapy care, physiotherapy for arthritis, physiotherapy exercises, physiotherapy exercises for lower back pain, basic physiotherapy exercises, physical therapist vs physiotherapist, what is matrix therapy in physiotherapy, physiotherapy machine, chest physiotherapy, injury rehabilitation physiotherapy, chronic pain physiotherapy, post injury physiotherapy care, evidence based physiotherapy, personalised physiotherapy treatment"
        />

        <meta name="author" content="MAXFIT Physiotherapy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://maxfitphysiotherapy.com.au/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MAXFIT Physiotherapy | Expert, Personalised Physiotherapy Care"
        />
        <meta
          property="og:description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxfitphysiotherapy.com/" />
        <meta property="og:site_name" content="MAXFIT Physiotherapy" />

        {/* Social Links */}
        <meta
          property="og:see_also"
          content="https://www.instagram.com/maxfit.physiotherapy/"
        />
        <meta
          property="og:see_also"
          content="https://www.facebook.com/maxfitphysiotherapy/"
        />

        {/* Facebook  */}
        <meta property="fb:app_id" content="#" />
        <meta
          property="fb:admins"
          content="https://www.facebook.com/maxfitphysiotherapy/"
        />

        {/* Instagram */}
        <meta name="instagram:title" content="MAXFIT Physiotherapy" />
        <meta
          name="instagram:description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />
        <meta name="instagram:site" content="maxfit.physiotherapy" />
      </Helmet>

      <div className="container-fluid p-0">
        {/* Banner Section */}
        <section className="py-5 mt-5 text-white about-banner-section position-relative white-back">
          <div className="container py-5 mt-5">
            <div className="row mt-0 mt-md-4 align-items-center">
              {/* Page Title and Breadcrumb */}
              <div className="col-12 text-center">
                {/* Page Title */}
                <h1 className="display-4 fw-bold mt-4 mb-3 text-center dark-text">
                  {blog.title}
                </h1>

                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 justify-content-center dark-text">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-decoration-none dark-text">
                        Home
                      </Link>
                    </li>
                    <span className="heading mx-3">/</span>
                    <li
                      className="breadcrumb-item active dark-text"
                      aria-current="page"
                    >
                      {blog.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Detail Section */}
        <section className="py-5">
          <div className="container">
            {/* Blog Header */}
            <div className="row">
              <div className="col-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-5"
                >
                  <Figure className="image-anime reveal box rounded-5 w-100 position-relative overflow-hidden image-figure">
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      className="img-fluid image-figure"
                    />
                  </Figure>
                </motion.div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para1}
                </motion.p>
                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para2}
                </motion.p>

                <motion.div
                  className="white-back p-4 rounded-4 d-flex"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <i className="bi bi-quote display-2 light-text"></i>
                  <p className="dark-text fs-4 mt-4 fw-bold">{blog.para3}</p>
                </motion.div>

                <motion.p
                  className="para mt-5"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para4}
                </motion.p>

                <motion.h1
                  className="headin dark-text fw-bold"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {blog.subtitle}
                </motion.h1>

                <motion.p
                  className="para mt-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para5}
                </motion.p>

                {/* Animated List */}
                <motion.ul
                  className="dark-text gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {[
                    blog.list1,
                    blog.list2,
                    blog.list3,
                    blog.list4,
                    blog.list5,
                  ].map((item, index) => (
                    <motion.li key={index} className="mt-3" variants={fadeUp}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para6}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Info Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default BlogDetail;
