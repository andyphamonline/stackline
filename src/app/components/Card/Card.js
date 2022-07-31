import { useSelector } from "react-redux"
import { getTitle, getImage, getSubtitle, getTags } from "../../../state/selectors"
import { tagSpan } from './Card.styled'

export const Card = () => {
  const title = useSelector(getTitle)
  const image = useSelector(getImage)
  const subtitle = useSelector(getSubtitle)
  const tags = useSelector(getTags)

  return (
		<div>
			{/* <img src={image} alt={subtitle} /> */}
			<h3>{title}</h3>
			<p>{subtitle}</p>
      <hr></hr>
      {tags && tags.map((tag, id) => (
        <tagSpan key={id}>{tag}</tagSpan>
      ))}
		</div>
	)
}