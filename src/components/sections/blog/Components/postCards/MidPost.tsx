import Link from "next/link"
import getFormattedDate from "../../../../../../lib/getFormattedDate";

type Props = {
    post: BlogPost,
}

const MidPost = ({post}: Props) => {
    const {id, title, date, readTime} = post;
    const formattedDate = getFormattedDate(date);
    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/blog/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{readTime + ' min read · ' + formattedDate}</p>
        </li>
    )
}

export default MidPost