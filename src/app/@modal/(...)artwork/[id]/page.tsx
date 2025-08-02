
import { pictures } from "@/lib/data/pictures"
import Modal from "@/components/Modal"
import ModalWrap from "@/components/ModalWrap"


export default async function ArtworkModalPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const picture = pictures.find((pic) => pic.id === id)


  return (
    <ModalWrap>
      <Modal picture={picture} />
    </ModalWrap>
  )
  
}