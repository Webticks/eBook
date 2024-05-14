import React from "react";
import coverImg from "../../../assets/images/books.png"
const GhostBook = ({ isBg }) => {

    return (
        <section style={{ marginTop: '20px', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={coverImg}
                    alt="Ghost Book Cover"
                    style={{ display: 'block', margin: '0 auto', width: '100%', height: '60vh', borderRadius: '15px' }}

                />
                <div style={{
                    position: 'absolute',
                    top: '38%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '24px'
                }}
                >
                    <h2 className="display-6" style={{ color: '#fff' }}>Ghost Book Writing</h2>

                </div>

                <div className="section-title-left text-center text-lg-start">
                    <p className="text-muted mb-5 fs-5">
                        Ghost book writing is the art of bringing someone else's story to life while remaining invisible as the writer. At Noble Book Publishing, we specialize in ghostwriting services that allow individuals to share their narratives, ideas, and expertise without the burden of writing themselves.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GhostBook;
