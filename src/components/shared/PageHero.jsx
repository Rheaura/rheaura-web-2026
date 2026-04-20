export default function PageHero({ eyebrow, title, lead, imgSrc, imgAlt, scrollHint }) {
  return (
    <div className="page-hero">
      <div className="ph-left">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="ph-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="ph-lead">{lead}</p>
        {scrollHint && <div className="ph-scroll-hint">{scrollHint}</div>}
      </div>
      <div className="ph-right">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}
