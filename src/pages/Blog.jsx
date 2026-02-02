import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { pageBannerData, blogData } from "../Constants/Data";
import Banner from "../components/Banner";
import ScrollingInfo from "../components/ScrollingInfo";
import NewsBlogCard from "../components/NewsBlogCard";
import { Pagination } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationItems = () => {
    const items = [];

    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />,
    );

    // Page numbers
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
      ) {
        items.push(
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>,
        );
      } else if (page === currentPage - 2 || page === currentPage + 2) {
        items.push(<Pagination.Ellipsis key={`ellipsis-${page}`} />);
      }
    }

    // Next button
    items.push(
      <Pagination.Next
        key="next"
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      />,
    );

    return items;
  };

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Blogs | MAXFIT Physiotherapy | Personalised Physiotherapy &
          Rehabilitation Care
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
        <Banner bannerData={pageBannerData.blog} />

        {/* Blog Posts Section */}
        <section className="py-5">
          <div className="container d-flex flex-column align-items-center">
            {/* Blog Grid */}
            <div className="row d-md-flex col-12">
              {currentBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className="col-12 col-md-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <NewsBlogCard blog={blog} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination className="mb-0 gap-3 rounded-3 custom-green-pagination">
                  {renderPaginationItems()}
                </Pagination>
              </div>
            )}
          </div>
        </section>

        {/* Scrolling Info Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default Blog;
