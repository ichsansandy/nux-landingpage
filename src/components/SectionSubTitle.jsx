import PropTypes from 'prop-types';

export default function SectionSubTitle({ children }) {
  return <p className="text-xs leading-[22.14px] md:text-p">{children}</p>;
}

SectionSubTitle.propTypes = {
  children: PropTypes.any,
};
