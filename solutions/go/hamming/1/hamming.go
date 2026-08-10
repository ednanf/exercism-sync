package hamming

import "errors"

func Distance(a, b string) (int, error) {
    // Distance can only be calculated between 2 strings of equal length.
	if len(a) != len(b) {
		return 0, errors.New("strands must be of equal length")
	}

	distance := 0

    // Loop through the length of a
	for i := 0; i < len(a); i++ {

        // Compare at the same index of b
		if a[i] != b[i] {
			distance++
		}
	}

	return distance, nil
}
