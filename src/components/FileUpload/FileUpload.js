import React, { useState } from 'react';
import axios from 'axios';
import style from './FileUpload.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { Web3Storage } from 'web3.storage'

import porsche from '../../assets/testPorsche.svg';

const FileUpload = (props) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState('');
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMwYmQ0ODE1M0ZBOTYxOGZmZTdGNjEzODk2ODJCZDc1YTY4NkFjNGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTc0NDkxMzU3NzQsIm5hbWUiOiJhdXRvLWF1Y3Rpb24ifQ.wIjf5oyG2GQ9llHl7I0Xdk6WxoFbFj87UelGEh-O74I';
	const [files, setFiles] = useState([]);

	const API_URL = 'http://localhost:8080'


	// Create a FormData object to send the file
	const handleImageUpload = async (event) => {
		// event.preventDefault()
		const client = new Web3Storage({ token })

		const cid = await client.put(files, {
			onRootCidReady: localCid => {
				console.log('uploading files' + localCid)
			},
			onStoredChunk: bytes => console.log('uplpad ' + bytes.toLocaleString() + 'to web3 storage')
		})
		console.log('stuff is now on web3 storage' + cid)
		console.log(`https://dweb.link/ipfs/${cid}`)
	}


	return (
		<div>
			<span
				className={style.CarTextField}>
				Add Image
			</span>

			<div
				className={style.CarImageWrapper}
			>
				<input
					type="file"
					onChange={e => setFiles(e.target.files)}
					className={style.ImageUpload} />

				{uploadStatus === 'uploading' && <p>Uploading...</p>}
				{uploadStatus === 'uploaded' && <p>Uploaded</p>}
				{selectedImage && <img src={selectedImage} alt="Uploaded" className={style.CarImage} />}
				<PrimaryButton
					text="Submit"
					width={200}
					click={() => handleImageUpload()}
				/>
			</div>
		</div>
	)
}

export default FileUpload;