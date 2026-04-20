import { useReveal } from '../../hooks/useReveal';
import { numeri } from '../../data/numeri';

export default function NumeriBand() {
  const ref = useReveal();
  return (
    <div className="numeri-band">
      <div className="numeri-grid">
        {numeri.map((n) => (
          <div key={n.val} className="numero reveal" ref={ref}>
            <div className="numero-val">{n.val}</div>
            <div className="numero-label">{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
