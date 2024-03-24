import ProductLeftView from "./ProductLeftView";
import ProductRightView from "./ProductRightView";

const QuickViewModalContent = ({ data, setOpenQuickViewModal }) => {
    return (
        <div className="p-3 flex gap-12">
            <ProductLeftView forModal={true} data={data} />
            <ProductRightView
                forModal={true}
                data={data}
                setOpenQuickViewModal={setOpenQuickViewModal}
            />
        </div>
    );
};

export default QuickViewModalContent;
