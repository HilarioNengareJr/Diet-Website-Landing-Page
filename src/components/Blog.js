import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="section blog active" aria-label="blog" id="blog" data-section="">
            <div className="container">

                <div className="title-wrapper">
                    <p className="section-subtitle">Our Blog Post</p>

                    <h2 className="h2 section-title">Latest Article of Nutrition</h2>
                </div>

                <ul className="grid-list">

                    <li>
                        <div className="blog-card">

                            <div className="wrapper">

                                <time className="publish-date" dateTime="2022-02-24">
                                    <span className="span">24</span> Feb
                                </time>

                                <div>

                                    <div className="card-author">
                                        <a href="#" className="card-link">
                                            By: <span className="span">Maddie Rife</span>
                                        </a>
                                    </div>

                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <p className="item-text">87 Likes</p>
                                        </li>

                                        <li className="card-meta-item">
                                            <p className="item-text">58 Share</p>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">It was popularised sheets the release contain</a>
                            </h3>

                            <p className="card-text">
                                Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <div className="wrapper">

                                <time className="publish-date" dateTime="2022-02-24">
                                    <span className="span">24</span> Feb
                                </time>

                                <div>

                                    <div className="card-author">
                                        <a href="#" className="card-link">
                                            By: <span className="span">Maddie Rife</span>
                                        </a>
                                    </div>

                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <p className="item-text">87 Likes</p>
                                        </li>

                                        <li className="card-meta-item">
                                            <p className="item-text">58 Share</p>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">It was popularised sheets the release contain</a>
                            </h3>

                            <p className="card-text">
                                Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <div className="wrapper">

                                <time className="publish-date" dateTime="2022-02-24">
                                    <span className="span">24</span> Feb
                                </time>

                                <div>

                                    <div className="card-author">
                                        <a href="#" className="card-link">
                                            By: <span className="span">Maddie Rife</span>
                                        </a>
                                    </div>

                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <p className="item-text">87 Likes</p>
                                        </li>

                                        <li className="card-meta-item">
                                            <p className="item-text">58 Share</p>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">It was popularised sheets the release contain</a>
                            </h3>

                            <p className="card-text">
                                Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.
                            </p>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default Blog;