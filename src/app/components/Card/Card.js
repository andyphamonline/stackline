import { useSelector } from "react-redux"
import { getTitle, getImage, getSubtitle, getTags } from "../../../state/selectors"
import { CardWrapper, TagWrapper } from './Card.styled'

export const Card = () => {
  const title = useSelector(getTitle)
  const image = useSelector(getImage)
  const subtitle = useSelector(getSubtitle)
  const tags = useSelector(getTags)

  return (
		<CardWrapper>
			<img src={image} alt={subtitle} />
			<h3>{title}</h3>
			<p>{subtitle}</p>
      <hr></hr>
      <TagWrapper>
        {tags && tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </TagWrapper>
		</CardWrapper>
	)
}