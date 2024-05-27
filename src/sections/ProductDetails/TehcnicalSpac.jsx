import React from "react";

function TehcnicalSpac({ data }) {
    return (
        <div className="mt-5">
            <p
                dangerouslySetInnerHTML={{
                    __html: data?.technicalSpecs,
                }}
            />
        </div>
    );
}

export default TehcnicalSpac;
