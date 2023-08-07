import PropTypes from 'prop-types';
import { GoDotFill } from 'react-icons/go';

export default function Crawler({ data }) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className="inline-block animate-slide">
        {data.map((item) => (
          <div
            className="inline-flex items-center gap-2 ml-2 "
            key={item.id}
          >
            <GoDotFill />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="inline-block animate-slide">
        {data.map((item) => (
          <div
            className="inline-flex items-center gap-2 ml-2 "
            key={`double${item.id}`}
          >
            <GoDotFill />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Crawler.propTypes = {
  data: PropTypes.array,
};
