import TextHtml from "@/components/core/TextHtml";

export default function Content({ content }: { content: string }) {
    return (
        <TextHtml value={content}  />
    )
}
