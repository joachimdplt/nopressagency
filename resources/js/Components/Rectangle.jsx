export default function Rectangle() {
    return (
        <div 
            className="w-[100px] h-[50px] hover:bg-gray-100 transition-colors duration-200"
            style={{
                transform: 'rotate(-45deg)',
                border: '1px solid #eee'
            }}
        />
    );
} 