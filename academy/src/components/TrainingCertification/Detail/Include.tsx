import TextHtml from "@/components/core/TextHtml";

export default function Include({ materials }: { materials: string }) {
    return (
        <TextHtml value={materials}  />
    )
}
