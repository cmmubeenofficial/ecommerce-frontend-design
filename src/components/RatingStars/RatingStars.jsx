function RatingStars({ rating = 0, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const value = rating - i;
        const full = value >= 1;
        const half = value >= 0.5 && value < 1;

        return (
          <span key={i} className="relative h-4 w-4">
            {/* empty */}
            <svg
              viewBox="0 0 20 20"
              className="absolute inset-0 text-gray-300"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956h4.162c.97 0 1.371 1.24.588 1.81l-3.37 2.449 1.287 3.955c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.365 2.468c-.784.57-1.838-.196-1.539-1.118l1.287-3.955-3.37-2.449c-.783-.57-.382-1.81.588-1.81h4.162L9.05 2.927z" />
            </svg>

            {/* full */}
            {full && (
              <svg
                viewBox="0 0 20 20"
                className="absolute inset-0 text-[#FF9017]"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956h4.162c.97 0 1.371 1.24.588 1.81l-3.37 2.449 1.287 3.955c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.365 2.468c-.784.57-1.838-.196-1.539-1.118l1.287-3.955-3.37-2.449c-.783-.57-.382-1.81.588-1.81h4.162L9.05 2.927z" />
              </svg>
            )}

            {/* half */}
            {half && (
              <svg
                viewBox="0 0 20 20"
                className="absolute inset-0 text-[#FF9017]"
                fill="currentColor"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956h4.162c.97 0 1.371 1.24.588 1.81l-3.37 2.449 1.287 3.955c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.365 2.468c-.784.57-1.838-.196-1.539-1.118l1.287-3.955-3.37-2.449c-.783-.57-.382-1.81.588-1.81h4.162L9.05 2.927z" />
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default RatingStars;