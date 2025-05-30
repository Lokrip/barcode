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

export type HeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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

export type ListElements = "ul" | "ol" | "li" | "dl" | "dt" | "dd";

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

export type MediaElements = "img" | "video" | "audio";

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

export type ComponentsHtml =
    | BlockElements
    | HeadingElements
    | InlineElements
    | ListElements
    | FormElements
    | MediaElements
    | TableElements;
