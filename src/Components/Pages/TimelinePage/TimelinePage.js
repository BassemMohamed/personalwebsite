import React from "react";
import styled from "styled-components";
import css from "./TimelinePage.style";
import Timeline from "../../UI/Timeline";

const TimelinePage = ({ className }) => (
  <>
    <section className={className}>
      <Timeline
        data={[
          {
            header: "Graduation! 🎓",
            date: "May 2017",
            markdownText:
              "Finshed my bachelor thesis at the german university in cairo."
          },
          {
            header: "First job ever! 👨‍💻",
            date: "June 2017",
            markdownText:
              "Started working as a full stack web developer at a degital marketing agency called [Beyond Creation.](https://www.beyond-creation.net)"
          },
          {
            header: "Frontend developer at Seal Software 💻",
            date: "November 2018",
            markdownText:
              "Choosing frontend development as my speciality, I started working at [seal-software](https://www.seal-software.com/), The leader in AI-powered contract analytics, discovery & data extraction."
          },
          {
            header: "First article ever! 📄",
            date: "December 2018",
            markdownText:
              "YES! I wanna write a book someday. *One thing at a time ✋*, Today! I published [my first ever blog post.](http://bassemmohamed.me/Post/a-full-year-of-css) 🎉"
          },
          {
            header: "2000 Followers! 🔥",
            date: "September 2019",
            markdownText:
              "*Is that for real?* I have published over 10 posts. Now, I have more than 2000 followers on [dev.to](https://dev.to/bassemmohamed)."
          }
        ]}
      />
    </section>
  </>
);

export default styled(TimelinePage)`
  ${css}
`;
