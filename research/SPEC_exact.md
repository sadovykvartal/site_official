# Точні розміри з оригіналу AURA (з webflow_real.css)

> Витягнуто 2026-05-29 з реального CSS. Використовуємо 1-в-1.

## Контейнер / секції
- `.container`: max-width **1580px**, width 100%, центр
- `.section`: max-width **1660px**, padding-top **104px** (mobile 156px), padding-inline **40px** (mobile 20px)
- `.hero-content-section`: max-width 1660px, padding-inline 40px, padding-bottom 64-80px; desktop grid 1fr 1fr

## Хедер (navbar)
- padding **20px**, border-bottom **1px solid #0000001a** (rgba(0,0,0,.1)), fixed
- `.nav-logo`: height **40px**
- `.nav-menu-2`: gap **24px**, align center, justify flex-end, padding-right 24px
- `.nav-link`: padding 12px 5px 10px
- `.divider-vertical`: 1px × **24px**, колір #e8e8e8, margin 10-15px (вертикальний розділювач перед телефоном)

## Типографіка (КРИТИЧНО)
- `.h1` (hero title): font **Fixeldisplay**, size **64px**, weight **600** (SemiBold, НЕ 800!), letter-spacing **-0.03em**, line-height **100%**
- `.h2` (section title): Fixeldisplay, size **40px** desktop / 48px / 36px responsive, weight **600**, letter-spacing **-0.03em**, line-height 100%
- `.h3`: 24px / weight 700 / lh 30px
- `.h4`: 18px
- `.accordion-trigger`: Fixeldisplay **20px**, weight **400**, колір **#9d8448** (золото), padding 32px top/bottom
- body: Fixeltext

## Бейдж секції (.section-bullet)
- колір тексту **#594123** (коричневий, НЕ золотий!)
- bg **#e8e8e8**
- border-left **2px solid #594123**
- border-radius: тільки праві кути 6px
- padding 11px 18px 9px 20px

## Hero-картки (.hero-card)
- backdrop blur **15px**
- bg **#c4b39e33** (беж 20% alpha)
- border **1px solid #c4b39e40**
- border-radius **16px**
- padding 20px, gap 16px, flex:1

## Селектор будинків (.tab-link)
- aspect 1:1, **48×48px**, колір **#9d8348**
- border 1px #e8e8e8, border-radius **16px** (НЕ повне коло!)
- активний - заповнений

## Кольори (уточнення)
- золото акцент: **#9d8348 / #9d8448**
- коричневий (бейдж, бабли): **#594123**
- беж картки/борди: **#c4b39e** (з alpha)
- лінія: **#e8e8e8**
- border хедера: rgba(0,0,0,.1)

## Виправити в нашому коді
1. container-sk: 1320->**1580**, padding 20->**40px**
2. h-display: weight 800->**600**, letter-spacing -0.02em -> **-0.03em**, lh 1.05 -> **1.0**
3. hero h1: -> 64px (lg), weight 600
4. section badge: золотий -> **коричневий #594123**, radius тільки праворуч
5. hero-card: bg/border -> беж #c4b39e (не білий)
6. селектор будинків: коло -> **квадрат radius 16px 48px**
7. хедер: повернути CTA-кнопку + вертикальний розділювач, logo height 40px
8. accordion: trigger 20px weight 400, padding 32px
