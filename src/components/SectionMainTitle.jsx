import PropTypes from 'prop-types';

export default function SectionMainTitle({ children }) {
  return <h1 className="text-[30px] leading-[29px] md:leading-[51.6px] md:text-h1 uppercase">{children}</h1>;
}

SectionMainTitle.propTypes = {
  children: PropTypes.any,
};
