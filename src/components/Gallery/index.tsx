import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import homemAranha from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: homemAranha
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=_rd3NITQNryhwhzP'
  }
]

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
              key={media.url}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img onClick={closeModal} src={close} alt="Ícone de fechar" />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder={0}></iframe>
          )}
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
