"use client";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { reviewsData } from "./reviews";
import { StarIcon } from "./reviews";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { defaultLocale } from "@/Manager/navigation";

export default function Testimonials({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) {
  const reviewsWrapperRef = useRef<HTMLDivElement>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true); // Track if fully scrolled left
  const [isScrolledRight, setIsScrolledRight] = useState(false); // Track if fully scrolled right
  const locale = useLocale();

  const handleScroll = () => {
    const wrapper = reviewsWrapperRef.current;
    if (wrapper) {
      const isAtStart = wrapper.scrollLeft === 0;
      const isAtEnd =
        wrapper.scrollLeft + wrapper.offsetWidth >= wrapper.scrollWidth;

      setIsScrolledLeft(isAtStart);
      setIsScrolledRight(isAtEnd);
    }
  };

  const scrollLeft = () => {
    reviewsWrapperRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    reviewsWrapperRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const wrapper = reviewsWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      return () => {
        wrapper.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section className="section section-light hidden no-padding-x">
      <div>
        <div className="section no-padding-y">
          <div className="container">
            <div className={styles.titlesWrapper}>
              <h3 className="heading2 color4">{title1}</h3>
              <h4 className="heading4 color4">{title2}</h4>
            </div>
          </div>
        </div>
        <div className={styles.reviewsWrapper} ref={reviewsWrapperRef}>
          {reviewsData.map((info, index) => (
            <div key={index} className={`shadow-4-m ${styles.card}`}>
              <div className={styles.starsReview}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, starIndex) => {
                    const filled = starIndex < Math.floor(info.stars); // Full stars
                    const half =
                      info.stars % 1 !== 0 &&
                      starIndex === Math.floor(info.stars); // Half star

                    return (
                      <StarIcon key={starIndex} filled={filled} half={half} />
                    );
                  })}
                </div>
                <p className="paragraph">{info.reviews[locale]}</p>
              </div>

              <div className={styles.authorInfoWrap}>
                <Image
                  className="shadow-4-s"
                  src={info.image}
                  alt={info.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="caption">{info.name}</h3>
                  <p className="caption-mini gray5">
                    {
                      <span className="caption-mini gray5">
                        {info.caption?.[locale] ||
                          info.caption?.[defaultLocale] ||
                          null}
                      </span>
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section no-padding-y">
          <div className="container">
            <div className={`gray7 ${styles.arrowWrapper}`}>
              <IoMdArrowBack
                className={`${styles.arrow} ${isScrolledLeft ? "gray3" : ""}`}
                onClick={scrollLeft}
              />
              <IoMdArrowForward
                className={`${styles.arrow} ${isScrolledRight ? "gray3" : ""}`}
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
