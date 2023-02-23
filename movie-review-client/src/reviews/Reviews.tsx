import React, {useEffect, useRef, useState} from 'react';
import ReviewForm from "../components/reviewForm/ReviewForm";
import {Console} from "inspector";
import {useParams} from "react-router-dom";
import {getMovieData, postReviewData} from "../services/MovieService";
import {MovieData, ReviewData} from "../dataTypes/dataTypes";
import {Col, Container, Row} from "react-bootstrap";

type movieIdParam ={
    movieId: string;
}
function Reviews() {
    const [movie, setMovie] = useState<MovieData>();
    const [reviews, setReviews] = useState<ReviewData[]>([]);

    const revText = useRef<HTMLTextAreaElement>();
    const {movieId} = useParams<movieIdParam>();

    useEffect(()=>{
        getMovieData(movieId).then((data) => {
            setMovie(data!);
            setReviews(data?.reviewIds!);
        });
    },[movieId]);

    const addReview = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const rev = revText.current;
        try {
            postReviewData(movieId!, rev?.value!).then((data)=> {
                let updatedReviews: ReviewData[] = [...reviews!, data!];

                //@ts-ignore
                rev.value = "";

                setReviews(updatedReviews);
            });

        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div>
                {/*<h1>Reviews</h1>*/}
                {/*<h3>{movie?.title}</h3>*/}
                {/*<h4>{movie?.reviewIds[0].body}</h4>*/}
                {/*<ReviewForm handleSubmit={() => console.log("Submitted review")} defaultValue={"default value"}*/}
                {/*            labelText={"label text"} revText={revText}/>*/}
            </div>
            <Container>
                <Row>
                    <Col><h1>Reviews</h1><hr /></Col>
                </Row>
                <Row className={"mt-2"}>
                    <Col>
                        <img src={movie?.poster} alt={movie?.title + " Poster"}/>
                    </Col>
                    <Col>
                        {
                            <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText={"Write your review!"} defaultValue={""} />
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                <hr />
                            </Col>
                            </Row>
                            </>
                        }
                        {
                            <Row>
                                <h4>Latest reviews</h4>
                                <hr/>
                            </Row>
                        }
                        {
                            reviews?.map((review)=>{
                                return(
                                    <>
                                        <Row>
                                            <Col><p>{review.body}</p></Col>
                                        </Row>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Reviews;