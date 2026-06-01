import './Marquee.css'

const items = [
  'Desert Rose Adenium',
  '✦',
  'Hand Grafted Specimens',
  '✦',
  'Ceramic Pot Collections',
  '✦',
  'Rare Thai Hybrids',
  '✦',
  'Shipped Pan India',
  '✦',
  'Expert Care Included',
  '✦',
  'Since 2019 · Nagpur',
  '✦',
]

export default function Marquee() {
  const allItems = [...items, ...items]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <span key={i} className={item === '✦' ? 'marquee-dot' : 'marquee-item'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}