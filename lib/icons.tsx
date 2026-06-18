/* Іконки на базі lucide-react (узгоджений лінійний стиль під real estate).
   Колір успадковується через currentColor. Ключі лишаються ті самі,
   тож компоненти-споживачі не змінюються. */
import {
  Shield,
  ShieldCheck,
  Trees,
  TreePine,
  Flame,
  Users,
  CalendarClock,
  Wallet,
  Tag,
  Droplets,
  Blinds,
  LayoutGrid,
  PaintRoller,
  ShoppingBag,
  Cross,
  GraduationCap,
  Baby,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  Drama,
  Fuel,
  Landmark,
  Package,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/* Обгортка задає типову товщину лінії; усі пропси (width/height/className) можна перевизначати. */
const wrap = (L: LucideIcon) => {
  const Wrapped = (p: LucideProps) => <L strokeWidth={1.75} absoluteStrokeWidth {...p} />;
  return Wrapped;
};

export const Icon = {
  // Про проєкт
  shield: wrap(Shield),
  shelter: wrap(ShieldCheck),
  tree: wrap(Trees),
  flame: wrap(Flame),
  people: wrap(Users),
  // Переваги
  percent: wrap(CalendarClock),
  wallet: wrap(Wallet),
  tag: wrap(Tag),
  drop: wrap(Droplets),
  window: wrap(Blinds),
  layout: wrap(LayoutGrid),
  // Комплектація
  wall: wrap(PaintRoller),
  // Розташування (зручності району)
  bag: wrap(ShoppingBag),
  cross: wrap(Cross),
  school: wrap(GraduationCap),
  kids: wrap(Baby),
  food: wrap(UtensilsCrossed),
  gym: wrap(Dumbbell),
  beauty: wrap(Scissors),
  theatre: wrap(Drama),
  fuel: wrap(Fuel),
  bank: wrap(Landmark),
  post: wrap(Package),
  park: wrap(TreePine),
} as const;

export type IconName = keyof typeof Icon;
