import type AttachmentMeta from "./attachment_meta.js";
import type AttributeMeta from "./attribute_meta.js";

export default interface NoteMeta {
    noteId?: string;
    notePath?: string[];
    isClone?: boolean;
    title?: string;
    notePosition?: number;
    prefix?: string | null;
    isExpanded?: boolean;
    type?: string;
    mime?: string;
    /** 'html' or 'markdown', applicable to text notes only */
    format?: "html" | "markdown";
    dataFileName: string;
    dirFileName?: string;
    /** this file should not be imported (e.g., HTML navigation) */
    noImport?: boolean;
    isImportRoot?: boolean;
    attributes?: AttributeMeta[];
    attachments?: AttachmentMeta[];
    children?: NoteMeta[];
}
