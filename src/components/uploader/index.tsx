import styled from '@emotion/styled';
import React, { ChangeEvent, ReactEventHandler } from 'react';

const StyledUploader = styled.div`
    width:31vw;
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

                row-gap:2.25%;
                column-gap:2.25%;

                .preview-item{
                    background:#eee;
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

const Uploader = () => {
    const handleChange = (e:ChangeEvent) => {
        const target = e.target as HTMLInputElement
        console.log(target.files);
    };

    return <StyledUploader>
        <div className='thumb-container'>
            <label htmlFor='image-uploader' className='image-uploader--container'>
                <input type="file" multiple id='image-uploader' onChange={handleChange} />
                <div className='previews-container'>
                    <div className='preview-item'>
                        
                    </div>
                    <div className='preview-item'>

                    </div>
                    <div className='preview-item'>

                    </div>
                    <div className='preview-item'>

                    </div>
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