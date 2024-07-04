"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";
import ResourceService from "@/services/ResourcesService";
import { Modal } from "antd";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { pdfjs, Document, Page } from "react-pdf";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Set workerSrc to the local file path
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     "pdfjs-dist/build/pdf.worker.min.mjs",
//     import.meta.url
// ).toString();

function DownloadableResource({ text = "Downloadable Resources", link }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [numPages, setNumPages] = useState();

    const handleDownload = () => {
        ResourceService.downloadResource(link, text);
    };

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    //     setLoading(false);
    // }

    const showModal = () => {
        setLoading(true);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className="flex items-center gap-3 cursor-pointer"
                // onClick={link.endsWith(".pdf") ? handleDownload : showModal}
                onClick={showModal}
            >
                <Image
                    src={Icons.download}
                    width={1000}
                    height={1000}
                    alt="download"
                    className="w-5 h-5 md:w-6 md:h-6"
                />
                <p className="text-brand-blue-500 text-base font-medium font-montserrat">
                    {text}
                </p>
            </div>

            <Modal
                title={text}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={(_) => (
                    <div className="flex flex-row items-end justify-end gap-5 mt-5">
                        <button
                            onClick={handleCancel}
                            className="border rounded-lg p-3"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDownload}
                            className="border rounded-lg p-3 bg-[#061628] text-white"
                        >
                            Download
                        </button>
                    </div>
                )}
                width={loading ? 700 : "fit-content"}
                centered
            >
                <div className="h-[700px] overflow-y-auto">
                    {/* <Document
                        file={{ url: `${GET_IMAGE_RENDER}?key=${link}` }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onSourceSuccess={() => setLoading(false)}
                        renderMode="canvas"
                        loading={skeleton}
                    >
                        {Array.apply(null, Array(numPages))
                            .map((x, i) => i + 1)
                            .map((page) => {
                                return (
                                    <Page
                                        pageNumber={page}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                );
                            })}
                    </Document> */}
                    {/* <video
                        loop
                        autoPlay
                        muted
                        // poster={this.props.image.source}
                        className="life-one-photo-video w-full h-full"
                    >
                        <source src={`${GET_IMAGE_RENDER}?key=${link}`} />
                    </video> */}
                    <FileRenderer link={link} setLoading={setLoading} />
                </div>
            </Modal>
        </>
    );
}

export default DownloadableResource;

const FileRenderer = ({ link, setLoading }) => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    const skeleton = (
        <div className="border border-gray-300 rounded-lg p-4 h-700 animate-pulse w-[600px]">
            <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
            </div>
        </div>
    );

    if (link.endsWith(".mp4")) {
        return (
            <video loop autoPlay muted className="w-full h-full">
                <source src={`${GET_IMAGE_RENDER}?key=${link}`} />
            </video>
        );
    } else if (link.endsWith(".pdf")) {
        return (
            <>
                <div>
                    <Document
                        file={{ url: `${GET_IMAGE_RENDER}?key=${link}` }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onSourceSuccess={() => setLoading(false)}
                        renderMode="canvas"
                        loading={skeleton}
                        options={{
                            cMapUrl: "cmaps/",
                            cMapPacked: true,
                            standardFontDataUrl: "standard_fonts/",
                        }}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        ))}
                    </Document>
                </div>
            </>
        );
    } else if (
        link.endsWith(".jpeg") ||
        link.endsWith(".jpg") ||
        link.endsWith(".png")
    ) {
        return (
            <div className="w-full ">
                <Image
                    src={`${GET_IMAGE_RENDER}?key=${link}`}
                    alt="Rendered content"
                    className="w-full object-cover rounded-sm"
                    height={1000}
                    width={1000}
                    objectFit="cover" // change to suit your needs
                />
            </div>
        );
    } else {
        return <p>Unsupported file type.</p>;
    }
};
