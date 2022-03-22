import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.title_link}>{data.title}</a></h3>
        <h4>{data.subtitle}  |  {data.date}</h4>
        {/* <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time> */}
      </header>
      <div className="project-content">
        <a href={data.video_link} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title_link: PropTypes.string,
    video_link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
