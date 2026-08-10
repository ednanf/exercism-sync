package twofer

import "fmt"

func ShareWith(name string) string {
    // If name is is not know, set it as "you"
	if name == "" {
        name = "you"
    }
	return fmt.Sprintf("One for %s, one for me.", name)
}
