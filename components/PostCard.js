import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publication d'un poste
    const publishPost = async (postId) => {
        // on change l'etat de la publication
        setPublishing(true);

        try {
            //mise à jour du poste
            await fetch('/api/posts', {
                method: 'PUT',
                body: postId,
            });

            // mettre par defaut
            setPublishing(false);

            // raffraîchir la page
            return router.push(router.asPath);
        } catch (error) {
           
            return setPublishing(false);
        }
    };
    // Suppression du poste
    const deletePost = async (postId) => {
        //Changer l'etat de suppression
        setDeleting(true);

        try {
            //Suppression du poste
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });

        //Changer l'etat de suppression
        setDeleting(false);

            // raffraichir la page
            return router.push(router.asPath);
        } catch (error) {
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>{new Date(post.createdAt).toLocaleDateString()}</small>
                <br />
                {!post.published ? (
                    <button type="button" onClick={() => publishPost(post._id)}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null}
                <button type="button" onClick={() => deletePost(post['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </li>
        </>
    );
}