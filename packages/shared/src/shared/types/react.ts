export interface ClassNameType {
    className?: string;
}

// 🔹 Контейнеры и блочные элементы
export type BlockElements =
  | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "aside"
  | "p";

// 🔹 Заголовки
export type HeadingElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

// 🔹 Инлайновые элементы
export type InlineElements =
  | "span"
  | "a"
  | "strong"
  | "em"
  | "br"
  | "small"
  | "mark"
  | "sub"
  | "sup"
  | "code";

// 🔹 Списки
export type ListElements =
  | "ul"
  | "ol"
  | "li"
  | "dl"
  | "dt"
  | "dd";

// 🔹 Формы и элементы управления
export type FormElements =
  | "form"
  | "input"
  | "textarea"
  | "select"
  | "option"
  | "label"
  | "button"
  | "fieldset"
  | "legend"
  | "output";

// 🔹 Медиа-элементы
export type MediaElements =
  | "img"
  | "video"
  | "audio"
  | "source"
  | "picture"
  | "iframe"
  | "canvas";

// 🔹 Таблицы
export type TableElements =
  | "table"
  | "thead"
  | "tbody"
  | "tfoot"
  | "tr"
  | "td"
  | "th"
  | "caption"
  | "colgroup"
  | "col";

// 🔹 Глобальный тип
export type ComponentsHtml =
  | BlockElements
  | HeadingElements
  | InlineElements
  | ListElements
  | FormElements
  | MediaElements
  | TableElements;

