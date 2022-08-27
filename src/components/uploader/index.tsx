import styled from '@emotion/styled';
import React, { ChangeEvent, ReactEventHandler, useEffect } from 'react';
import { photoT } from '../../hooks/usePhoto';

const StyledUploader = styled.div`
    width:31vw;
    min-width:396px;
    aspect-ratio:1 / 1.5;
    
    background:#fff;

    border:1px solid #ddd;
    border-radius:5px;

    .thumb-container{
        width:100%;
        height: calc(100% - 57px);
        padding:28px 19px;

        .image-uploader--container{
            display:block;
            width:100%;
            height:100%;

            cursor:pointer;

            input{
                display:inherit;
            
                -webkit-appearance:none;
                appearance:none;
                
                opacity:0;

                width:0;
                height:0;
            }

            .previews-container{
                width:100%;
                height:100%;
                
                display:grid;
                grid-template-columns:1fr 1fr;
                // grid-template-rows:auto;
                grid-auto-rows:1fr;

                row-gap:2.25%;
                column-gap:2.25%;

                .preview-item{
                    overflow:hidden;

                    background:#eee;
                    position:relative;

                    .preview-ico{
                        display:inline-block;

                        position:absolute;

                        top:50%;
                        left:50%;

                        transform:translate(-50%, -50%);
                        
                        width:30%;
                        aspect-ratio:1;

                        mask: url('/svg/ico_plus.svg');
                        -webkit-mask: url('/svg/ico_plus.svg');
                        mask-size:100%;

                        background:#000;
                    }
                    .preview-image-container{
                        width:100%;
                        height:100%;

                        img{
                            width:100%;
                            height:100%;
                            object-fit:cover;
                        }
                    }
                }
            }
        }
    }

    .download-container{
        width:100%;

        height:57px;
        border-top:1px solid #ddd;
        
        button{
            width:100%;
            height:100%;

            display:block;
            cursor:pointer;

            border:none;
            outline:none;
            background:transparent;

            .icon-container{
                width:6%;
                aspect-ratio:1;

                display:inline-block;
                
                .icon-download{
                    background-color:#ddd;

                    display:inline-block;

                    width:100%;
                    height:100%;
                    
                    
                    mask:url('/svg/ico_download.svg');
                    -webkit-mask:url('/svg/ico_download.svg');

                    mask-size:100%;
                }
            }
        }
    }
`

export type UploaderProps = {
    photos: photoT[],
    setPhotoInformation: Function
};

const Uploader = ({photos, setPhotoInformation}: UploaderProps) => {
    const handleChange = (e:ChangeEvent) => {
        const target = e.target as HTMLInputElement
        if(target && target.files){
            const files = target.files;
            setPhotoInformation(files)
        }
    };

    return <StyledUploader>
        <div className='thumb-container'>
            <label htmlFor='image-uploader' className='image-uploader--container'>
                <input type="file" multiple id='image-uploader' onChange={handleChange} />
                <div className='previews-container'>
                    {Array.from(Array(4)).map((_, i) => 
                        <div className='preview-item' key={i}>
                            <i className='preview-ico'></i>
                            { photos[i] && <div className='preview-image-container'>
                                <img src={photos[i].src} alt={`image${i}`} />
                            </div> }   
                        </div>)}
                </div>
            </label>
        </div>
        <div className='download-container'>
            <button>
                <span className='icon-container'>
                    <i className='icon-download'></i>
                </span>
            </button>
        </div>
    </StyledUploader>
}

export default Uploader;