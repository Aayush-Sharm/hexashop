import DataTable from 'react-data-table-component';

const customStyles = {
    row: {
        style: {
            minHeight: '72px', 
        },
    },
    headCells: {  
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
            color: 'White',
            fontWeight: '900',
            fontSize: '15px',
            backgroundColor: 'black'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
        },
    },
};

const CustomDataTable = (props) => {
   
    const{columns, data} = props
    

    return (
        <div className='custom-table'>
            <DataTable 
                className='Data-table'
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                fixedHeader={{fixedHeader: true, fixedHeaderScrollHeight: '300px'}}
            />
        </div>
    );
};

export default CustomDataTable;