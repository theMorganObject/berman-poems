// import Link from 'next/link';

function PoemItem(props) {
  const { title, date, excerpt } = props.poem;

  // const linkPath = `/posts/${slug}`;
  return (
    <li>
      {/* <Link href={linkPath}> */}
      <div>
        <h3>{title}</h3>
        <time>{date}</time>
        <p>{excerpt}</p>
      </div>
      {/* </Link> */}
    </li>
  );
}

export default PoemItem;
